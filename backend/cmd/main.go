package main

import (
	"log"

	"github.com/takazu8108180/personal-palette/backend/app"
)

func main() {
	err := app.Run()
	if err != nil {
		log.Fatalf("Error starting the app: %v", err)
	}
}
