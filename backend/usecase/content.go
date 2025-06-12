package usecase

import (
	"context"

	"github.com/takazu8108180/personal-palette/backend/domain/entity"
)

type (
	ContentCreateInput struct {
		Title string
	}
	ContentCreateOutput struct {
		Content *entity.Content
	}
)

type ContentUsecase interface {
	Create(ctx context.Context, input *ContentCreateInput) (*ContentCreateOutput, error)
}
