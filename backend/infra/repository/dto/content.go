package dto

import "time"

type ContentDTO struct {
	ID        string
	Title     string
	Genre     string
	Review    string
	Notes     string
	Tag       string
	Score     int
	CreatedAt time.Time
	UpdatedAt time.Time
}

func (ContentDTO) TableName() string {
	return "contents"
}
