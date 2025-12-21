package repository

import (
	"github.com/takazu8108180/personal-palette/backend/domain/entity"
)

type ContentRepository interface {
	Create(content *entity.Content) error
	// List returns all contents. No filtering/pagination for now.
	List() ([]*entity.Content, error)
}
