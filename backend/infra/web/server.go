package web

import (
	"github.com/gin-gonic/gin"
	"github.com/takazu8108180/personal-palette/backend/adapter/web/controller"
	"github.com/takazu8108180/personal-palette/backend/adapter/web/presenter"
	"github.com/takazu8108180/personal-palette/backend/infra/database"
	"github.com/takazu8108180/personal-palette/backend/usecase/interactor"
)

func BuildServer(db *database.DB) (*gin.Engine, error) {
	controllers, err := buildControllers(db)
	if err != nil {
		return nil, err
	}

	server := gin.Default()

	v1 := server.Group("/api/v1")
	AttachRouter(v1, controllers)

	return server, nil
}

func buildControllers(db *database.DB) (*Controllers, error) {
	usecase := interactor.NewContentsInteractor(db)
	presenter := presenter.NewContentPresenter(usecase)
	contentsController := controller.NewContentController(presenter)

	return &Controllers{
		ContentController: contentsController,
	}, nil
}
