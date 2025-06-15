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
