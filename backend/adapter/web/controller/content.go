package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/takazu8108180/personal-palette/backend/adapter/web/model"
	"github.com/takazu8108180/personal-palette/backend/adapter/web/presenter"
	"github.com/takazu8108180/personal-palette/backend/usecase"
	"github.com/takazu8108180/personal-palette/backend/usecase/request"
)

var _ ContentController = (*ContentControllerImpl)(nil)

type ContentController interface {
	Create(c *gin.Context)
}

type ContentControllerImpl struct {
	usecase   usecase.ContentUsecase
	presenter presenter.ContentPresenter
}

func NewContentController(u usecase.ContentUsecase, p presenter.ContentPresenter) ContentController {
	return &ContentControllerImpl{
		usecase:   u,
		presenter: p,
	}
}

func (c *ContentControllerImpl) Create(ctx *gin.Context) {
	var requestData model.ContentCreateRequestData
	if err := ctx.ShouldBindJSON(&requestData); err != nil {
		c.presenter.PresentError(ctx, http.StatusBadRequest, "Invalid request data")
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

	outputData, err := c.usecase.Create(ctx, usecaseInput)
	if err != nil {
		c.presenter.PresentError(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	c.presenter.Create(ctx, outputData)
}
