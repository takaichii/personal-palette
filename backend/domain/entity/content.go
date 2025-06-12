package entity

import "time"

type Content struct {
	id        string
	title     string
	genre     string
	review    string
	notes     string
	tag       string
	score     int
	createdAt time.Time
	updatedAt time.Time
}

func NewAccount(
	id, title, genre, review, notes, tag string,
	score int,
) *Content {
	return &Content{
		id:        id,
		title:     title,
		genre:     genre,
		review:    review,
		notes:     notes,
		tag:       tag,
		score:     score,
		createdAt: time.Now(),
		updatedAt: time.Now(),
	}
}

func (c *Content) ID() string {
	return c.id
}
func (c *Content) Title() string {
	return c.title
}
func (c *Content) Genre() string {
	return c.genre
}
func (c *Content) Review() string {
	return c.review
}
func (c *Content) Notes() string {
	return c.notes
}
func (c *Content) Tag() string {
	return c.tag
}
func (c *Content) Score() int {
	return c.score
}
func (c *Content) CreatedAt() time.Time {
	return c.createdAt
}
func (c *Content) UpdatedAt() time.Time {
	return c.updatedAt
}
func (c *Content) SetTitle(title string) {
	c.title = title
	c.updatedAt = time.Now()
}
func (c *Content) SetGenre(genre string) {
	c.genre = genre
	c.updatedAt = time.Now()
}
func (c *Content) SetReview(review string) {
	c.review = review
	c.updatedAt = time.Now()
}
func (c *Content) SetNotes(notes string) {
	c.notes = notes
	c.updatedAt = time.Now()
}
func (c *Content) SetTag(tag string) {
	c.tag = tag
	c.updatedAt = time.Now()
}
func (c *Content) SetScore(score int) {
	c.score = score
	c.updatedAt = time.Now()
}
