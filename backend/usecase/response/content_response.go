package response

import "time"

type ContentCreateOutput struct {
	ID string
}

// ContentListItem represents a single content in list responses.
type ContentListItem struct {
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
	Contents []ContentListItem
}
