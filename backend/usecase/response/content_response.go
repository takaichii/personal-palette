package response

type ContentCreateOutput struct {
	ID string
}

// ContentListItem represents a single content in list responses.
type ContentListItem struct {
	ID        string `json:"id"`
	Title     string `json:"title"`
	Genre     string `json:"genre"`
	Review    string `json:"review"`
	Notes     string `json:"notes"`
	Tag       string `json:"tag"`
	Score     int    `json:"score"`
	CreatedAt string `json:"createdAt"`
	UpdatedAt string `json:"updatedAt"`
}

// ContentListOutput is the top-level response for list API.
type ContentListOutput struct {
	Contents []ContentListItem `json:"contents"`
}
