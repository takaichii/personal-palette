package web

import (
	"github.com/gin-gonic/gin"
	"github.com/takazu8108180/personal-palette/backend/adapter/web/controller"
)

type Controllers struct {
	ContentController controller.ContentController
}

func AttachRouter(router *gin.RouterGroup, controllers *Controllers) {
	router.POST("/contents", controllers.ContentController.Create)
	router.GET("/contents", controllers.ContentController.List)
	router.GET("/contents/:id", controllers.ContentController.GetByID)
	// router.PUT("/users/:id", controllers.UserController.UpdateUser)
	router.DELETE("/contents/:id", controllers.ContentController.Delete)
}
