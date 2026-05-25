package repository

import (
	"context"

	"github.com/takazu8108180/personal-palette/backend/domain/entity"
	"github.com/takazu8108180/personal-palette/backend/domain/repository"
	"github.com/takazu8108180/personal-palette/backend/infra/database"
	"github.com/takazu8108180/personal-palette/backend/infra/repository/dto"
)

type ContentRepository struct {
	db *database.DB
}

var _ repository.ContentRepository = (*ContentRepository)(nil)

func NewContentRepository(db *database.DB) *ContentRepository {
	return &ContentRepository{
		db: db,
	}
}

func (r *ContentRepository) Create(ctx context.Context, content *entity.Content) error {
	contentDTO := dto.ContentDTO{
		ID:        content.ID(),
		Title:     content.Title(),
		Genre:     content.Genre(),
		Review:    content.Review(),
		Notes:     content.Notes(),
		Tag:       content.Tag(),
		Score:     content.Score(),
		CreatedAt: content.CreatedAt(),
		UpdatedAt: content.UpdatedAt(),
	}

	err := r.db.Conn.WithContext(ctx).Create(&contentDTO).Error
	if err != nil {
		return err
	}

	return nil
}

func (r *ContentRepository) List(ctx context.Context) ([]*entity.Content, error) {
	var dtos []dto.ContentDTO
	if err := r.db.Conn.WithContext(ctx).Find(&dtos).Error; err != nil {
		return nil, err
	}

	contents := make([]*entity.Content, 0, len(dtos))
	for _, d := range dtos {
		c := entity.NewContentFromRecord(
			d.ID,
			d.Title,
			d.Genre,
			d.Review,
			d.Notes,
			d.Tag,
			d.Score,
			d.CreatedAt,
			d.UpdatedAt,
		)
		contents = append(contents, c)
	}

	return contents, nil
}

func (r *ContentRepository) GetByID(ctx context.Context, id string) (*entity.Content, error) {
	var dto dto.ContentDTO
	if err := r.db.Conn.WithContext(ctx).First(&dto, "id = ?", id).Error; err != nil {
		return nil, err
	}

	content := entity.NewContentFromRecord(
		dto.ID,
		dto.Title,
		dto.Genre,
		dto.Review,
		dto.Notes,
		dto.Tag,
		dto.Score,
		dto.CreatedAt,
		dto.UpdatedAt,
	)

	return content, nil
}
