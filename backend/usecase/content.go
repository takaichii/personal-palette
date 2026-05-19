package usecase

import (
	"context"

	"github.com/takazu8108180/personal-palette/backend/usecase/request"
	"github.com/takazu8108180/personal-palette/backend/usecase/response"
)

type ContentUsecase interface {
	Create(ctx context.Context, input *request.ContentCreateInput) (*response.ContentCreateOutput, error)
	// List returns list of contents
	List(ctx context.Context) (*response.ContentListOutput, error)
}
