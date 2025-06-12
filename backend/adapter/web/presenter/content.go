package presenter

import (
	"fmt"

	"github.com/gin-gonic/gin"
	"github.com/takazu8108180/personal-palette/backend/usecase"
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
	fmt.Println("ContentPresenter Create called")
}
