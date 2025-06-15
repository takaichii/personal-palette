package controller

import (
	"github.com/gin-gonic/gin"
	"github.com/takazu8108180/personal-palette/backend/adapter/web/presenter"
)

var _ ContentController = (*ContentControllerImpl)(nil)

type ContentController interface {
	Create(c *gin.Context)
}

type ContentControllerImpl struct {
	presenter presenter.ContentPresenter
}

func NewContentController(presenter presenter.ContentPresenter) ContentController {
	return &ContentControllerImpl{
		presenter: presenter,
	}
}

func (c *ContentControllerImpl) Create(ctx *gin.Context) {
	c.presenter.Create(ctx)
}
