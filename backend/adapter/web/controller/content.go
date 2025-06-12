package controller

import (
	"fmt"

	"github.com/gin-gonic/gin"
	"github.com/takazu8108180/personal-palette/backend/adapter/web/presenter"
)

type ContentController interface {
	Create(c *gin.Context)
}

type ContentControllerImpl struct{}

func NewContentController(presenter presenter.ContentPresenter) ContentController {
	return &ContentControllerImpl{}
}

func (c *ContentControllerImpl) Create(ctx *gin.Context) {
	fmt.Println("Create content called")
}
