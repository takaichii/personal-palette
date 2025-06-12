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
	// router.GET("/users/:id", controllers.UserController.GetUser)
	// router.PUT("/users/:id", controllers.UserController.UpdateUser)
	// router.DELETE("/users/:id", controllers.UserController.DeleteUser)
}
