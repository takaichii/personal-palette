package database

import (
	"fmt"
	"os"

	"github.com/joho/godotenv"
	"github.com/pkg/errors"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type DB struct {
	Conn *gorm.DB
}

func NewDB() (*DB, error) {
	err := godotenv.Load(".env")
	if err != nil {
		return nil, errors.WithStack(err)
	}

	dbConn := fmt.Sprintf(
		"host=%s port=%s user=%s dbname=%s password=%s sslmode=disable TimeZone=Asia/Tokyo",
		os.Getenv("DB_HOST"),
		os.Getenv("DB_PORT"),
		os.Getenv("USERNAME"),
		os.Getenv("DATABASE"),
		os.Getenv("USERPASS"))

	db, err := gorm.Open(postgres.Open(dbConn), &gorm.Config{})
	if err != nil {
		return nil, errors.WithStack(err)
	}

	return &DB{Conn: db}, nil
}

// Close DB connection．
func (d *DB) CloseDB() error {
	db, err := d.Conn.DB()
	if err != nil {
		return errors.WithStack(err)
	}

	err = db.Close()
	if err != nil {
		return errors.WithStack(err)
	}

	return nil
}
