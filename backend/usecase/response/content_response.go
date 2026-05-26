package response

import "time"

type ContentCreateOutput struct {
	ID string
}

// ContentItemOutput represents a single content in list responses.
type ContentItemOutput struct {
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

// ContentListOutput is the top-level response for list API.
type ContentListOutput struct {
	Contents []ContentItemOutput
}

