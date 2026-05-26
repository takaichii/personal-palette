package interactor

import (
	"context"

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

	err := i.contentRepository.Create(ctx, content)
	if err != nil {
		return nil, err
	}

	return &response.ContentCreateOutput{ID: content.ID()}, nil
}

func (i *ContentInteractor) List(ctx context.Context) (*response.ContentListOutput, error) {
	entities, err := i.contentRepository.List(ctx)
	if err != nil {
		return nil, err
	}

	items := make([]response.ContentItemOutput, 0, len(entities))
	for _, e := range entities {
		items = append(items, response.ContentItemOutput{
			ID:        e.ID(),
			Title:     e.Title(),
			Genre:     e.Genre(),
			Review:    e.Review(),
			Notes:     e.Notes(),
			Tag:       e.Tag(),
			Score:     e.Score(),
			CreatedAt: e.CreatedAt(),
			UpdatedAt: e.UpdatedAt(),
		})
	}

	return &response.ContentListOutput{Contents: items}, nil
}

func (i *ContentInteractor) GetByID(ctx context.Context, id string) (*response.ContentItemOutput, error) {
	entities, err := i.contentRepository.GetByID(ctx, id)
	if err != nil {
		return nil, err
	}

	return &response.ContentItemOutput{
		ID:        entities.ID(),
		Title:     entities.Title(),
		Genre:     entities.Genre(),
		Review:    entities.Review(),
		Notes:     entities.Notes(),
		Tag:       entities.Tag(),
		Score:     entities.Score(),
		CreatedAt: entities.CreatedAt(),
		UpdatedAt: entities.UpdatedAt(),
	}, nil
}

func (i *ContentInteractor) Delete(ctx context.Context, id string) error {
	return i.contentRepository.Delete(ctx, id)
}
