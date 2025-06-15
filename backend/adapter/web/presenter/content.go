package presenter

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/takazu8108180/personal-palette/backend/adapter/web/presenter/model"
	"github.com/takazu8108180/personal-palette/backend/usecase"
	"github.com/takazu8108180/personal-palette/backend/usecase/request"
)

type ContentPresenter interface {
	Create(ctx *gin.Context)
}

type ContentPresenterImpl struct {
	usecase usecase.ContentUsecase
}

func NewContentPresenter(usecase usecase.ContentUsecase) *ContentPresenterImpl {
	return &ContentPresenterImpl{
		usecase: usecase,
	}
}

func (p *ContentPresenterImpl) Create(ctx *gin.Context) {
	var requestData model.ContentCreateRequestData
	if err := ctx.ShouldBindJSON(&requestData); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request data"})
		return
	}

	usecaseInput := &request.ContentCreateInput{
		Title:  requestData.Title,
		Genre:  requestData.Genre,
		Review: requestData.Review,
		Notes:  requestData.Notes,
		Tag:    requestData.Tag,
		Score:  requestData.Score,
	}

	outputData, err := p.usecase.Create(ctx, usecaseInput)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	responseData := &model.ContentCreateResponseData{
		ID: outputData.ID,
	}

	ctx.JSON(http.StatusCreated, responseData)
}
