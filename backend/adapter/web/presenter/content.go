package presenter

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/takazu8108180/personal-palette/backend/adapter/web/model"
	"github.com/takazu8108180/personal-palette/backend/usecase/response"
)

var _ ContentPresenter = (*ContentPresenterImpl)(nil)

type ContentPresenter interface {
	Create(ctx *gin.Context, outputData *response.ContentCreateOutput)
	PresentError(ctx *gin.Context, status int, message string)
}

type ContentPresenterImpl struct{}

func NewContentPresenter() *ContentPresenterImpl {
	return &ContentPresenterImpl{}
}

func (p *ContentPresenterImpl) Create(ctx *gin.Context, outputData *response.ContentCreateOutput) {

	responseData := &model.ContentCreateResponseData{
		ID: outputData.ID,
	}

	ctx.JSON(http.StatusCreated, responseData)
}

func (p *ContentPresenterImpl) PresentError(ctx *gin.Context, status int, message string) {
	ctx.JSON(status, gin.H{"error": message})
}
