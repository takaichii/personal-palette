package repository

import (
	"github.com/takazu8108180/personal-palette/backend/domain/entity"
)

type ContentRepository interface {
	Create(content *entity.Content) error
}
