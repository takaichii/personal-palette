package app

import (
	"github.com/gin-gonic/gin"
	"github.com/pkg/errors"
)

func Run() error {
	// Initialize the application
	// This is where you would set up your application, such as connecting to a database, setting up routes, etc.

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
