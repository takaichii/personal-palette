package presenter

import (
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/takazu8108180/personal-palette/backend/adapter/web/model"
	"github.com/takazu8108180/personal-palette/backend/usecase/response"
)

var _ ContentPresenter = (*ContentPresenterImpl)(nil)

type ContentPresenter interface {
	Create(ctx *gin.Context, outputData *response.ContentCreateOutput)
	PresentError(ctx *gin.Context, status int, message string)
	List(ctx *gin.Context, outputData *response.ContentListOutput)
	GetByID(ctx *gin.Context, outputData *response.ContentItemOutput)
	Delete(ctx *gin.Context)
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

func (p *ContentPresenterImpl) List(ctx *gin.Context, outputData *response.ContentListOutput) {
	items := make([]model.ContentItemData, 0, len(outputData.Contents))
	for _, it := range outputData.Contents {
		items = append(items, model.ContentItemData{
			ID:        it.ID,
			Title:     it.Title,
			Genre:     it.Genre,
			Review:    it.Review,
			Notes:     it.Notes,
			Tag:       it.Tag,
			Score:     it.Score,
			CreatedAt: it.CreatedAt.Format(time.RFC3339),
			UpdatedAt: it.UpdatedAt.Format(time.RFC3339),
		})
	}

	responseData := &model.ContentListResponseData{Contents: items}
	ctx.JSON(http.StatusOK, responseData)
}

func (p *ContentPresenterImpl) GetByID(ctx *gin.Context, outputData *response.ContentItemOutput) {
	responseData := &model.ContentItemData{
		ID:        outputData.ID,
		Title:     outputData.Title,
		Genre:     outputData.Genre,
		Review:    outputData.Review,
		Notes:     outputData.Notes,
		Tag:       outputData.Tag,
		Score:     outputData.Score,
		CreatedAt: outputData.CreatedAt.Format(time.RFC3339),
		UpdatedAt: outputData.UpdatedAt.Format(time.RFC3339),
	}

	ctx.JSON(http.StatusOK, responseData)
}

func (p *ContentPresenterImpl) Delete(ctx *gin.Context) {
	ctx.Status(http.StatusNoContent)
}
