package interactor

import (
	"context"
	"time"

	"github.com/takazu8108180/personal-palette/backend/domain/entity"
	"github.com/takazu8108180/personal-palette/backend/domain/repository"
	"github.com/takazu8108180/personal-palette/backend/usecase"
	"github.com/takazu8108180/personal-palette/backend/usecase/request"
	"github.com/takazu8108180/personal-palette/backend/usecase/response"
)

var _ = usecase.ContentUsecase((*ContentInteractor)(nil))

type ContentInteractor struct {
	contentRepository repository.ContentRepository
}

func NewContentsInteractor(contentRepository repository.ContentRepository) *ContentInteractor {
	return &ContentInteractor{
		contentRepository: contentRepository,
	}
}

func (i *ContentInteractor) Create(ctx context.Context, input *request.ContentCreateInput) (*response.ContentCreateOutput, error) {
	content := entity.NewContent(
		input.Title,
		input.Genre,
		input.Review,
		input.Notes,
		input.Tag,
		input.Score,
	)

	err := i.contentRepository.Create(content)
	if err != nil {
		return nil, err
	}

	return &response.ContentCreateOutput{ID: content.ID()}, nil
}

func (i *ContentInteractor) List(ctx context.Context) (*response.ContentListOutput, error) {
	entities, err := i.contentRepository.List()
	if err != nil {
		return nil, err
	}

	items := make([]response.ContentListItem, 0, len(entities))
	for _, e := range entities {
		items = append(items, response.ContentListItem{
			ID:        e.ID(),
			Title:     e.Title(),
			Genre:     e.Genre(),
			Review:    e.Review(),
			Notes:     e.Notes(),
			Tag:       e.Tag(),
			Score:     e.Score(),
			CreatedAt: e.CreatedAt().Format(time.RFC3339),
			UpdatedAt: e.UpdatedAt().Format(time.RFC3339),
		})
	}

	return &response.ContentListOutput{Contents: items}, nil
}
