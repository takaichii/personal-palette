package interactor

import (
	"context"
	"fmt"

	"github.com/takazu8108180/personal-palette/backend/infra/database"
	"github.com/takazu8108180/personal-palette/backend/usecase"
)

var _ = usecase.ContentUsecase((*ContentInteractor)(nil))

type ContentInteractor struct {
	db *database.DB
}

func NewContentsInteractor(db *database.DB) *ContentInteractor {
	return &ContentInteractor{db: db}
}

func (i *ContentInteractor) Create(ctx context.Context, input *usecase.ContentCreateInput) (*usecase.ContentCreateOutput, error) {
	fmt.Println("TODO: ContentsInteractor Create called")

	return &usecase.ContentCreateOutput{Content: nil}, nil
}
