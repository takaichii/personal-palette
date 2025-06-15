package repository

import (
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

func (r *ContentRepository) Create(content *entity.Content) error {
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

	err := r.db.Conn.Create(&contentDTO).Error
	if err != nil {
		return err
	}

	return nil
}
