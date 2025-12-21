package model

type ContentCreateRequestData struct {
	Title  string `json:"title" binding:"required"`
	Genre  string `json:"genre" binding:"required"`
	Review string `json:"review" binding:"required"`
	Notes  string `json:"notes" binding:"required"`
	Tag    string `json:"tag" binding:"required"`
	Score  int    `json:"score" binding:"required"`
}
type ContentCreateResponseData struct {
	ID string `json:"id"`
}

type ContentListItemData struct {
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

type ContentListResponseData struct {
	Contents []ContentListItemData `json:"contents"`
}
