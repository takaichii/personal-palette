package repository

import (
	"context"

	"github.com/takazu8108180/personal-palette/backend/domain/entity"
)

type ContentRepository interface {
	Create(ctx context.Context, content *entity.Content) error
	List(ctx context.Context) ([]*entity.Content, error)
}
