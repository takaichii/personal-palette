package app

import (
	"github.com/gin-gonic/gin"
	"github.com/pkg/errors"
	"github.com/takazu8108180/personal-palette/infra/database"
)

func Run() error {
	db, err := database.NewDB()
	if err != nil {
		return errors.WithStack(err)
	}

	// TODO: Logger

	defer func() {
		if err := db.Close(); err != nil {
			panic(errors.WithStack(err))
		}
	}()

	server, err := buildServer()
	if err != nil {
		return errors.WithStack(err)
	}

	err = server.Run(":8080")
	if err != nil {
		return errors.WithStack(err)
	}

	return nil
}

func buildServer() (*gin.Engine, error) {
	server := gin.Default()
	return server, nil
}
