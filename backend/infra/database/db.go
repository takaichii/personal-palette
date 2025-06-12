package database

import (
	"fmt"
	"os"
	"strconv"

	"github.com/joho/godotenv"
	"github.com/pkg/errors"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type DB struct {
	db *gorm.DB
}

func NewDB() (*DB, error) {
	err := godotenv.Load(".env")
	if err != nil {
		return nil, errors.WithStack(err)
	}

	port, _ := strconv.Atoi(os.Getenv("DB_PORT"))
	dbConn := fmt.Sprintf(
		"host=%s port=%s user=%s dbname=%s password=%s sslmode=disable TimeZone=Asia/Tokyo",
		os.Getenv("DB_HOST"),
		port,
		os.Getenv("USERNAME"),
		os.Getenv("DATABASE"),
		os.Getenv("USERPASS"))

	db, err := gorm.Open(postgres.Open(dbConn), &gorm.Config{})
	if err != nil {
		return nil, errors.WithStack(err)
	}

	return &DB{db: db}, nil
}

// Close DB connection．
func (d *DB) CloseDB() error {
	db, err := d.db.DB()
	if err != nil {
		return errors.WithStack(err)
	}

	err = db.Close()
	if err != nil {
		return errors.WithStack(err)
	}

	return nil
}
