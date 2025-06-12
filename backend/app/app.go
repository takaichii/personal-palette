package app

import (
	"github.com/pkg/errors"
	"github.com/takazu8108180/personal-palette/backend/infra/database"
	"github.com/takazu8108180/personal-palette/backend/infra/web"
)

func Run() error {
	db, err := database.NewDB()
	if err != nil {
		return errors.WithStack(err)
	}

	// TODO: Logger

	defer db.CloseDB()

	server, err := web.BuildServer(db)
	if err != nil {
		return errors.WithStack(err)
	}

	err = server.Run(":8080")
	if err != nil {
		return errors.WithStack(err)
	}

	return nil
}
