# ===== Settings =====
APP_NAME := app
PKG      := ./...
MAIN     := ./backend/cmd/main.go

# ===== Commands =====
.PHONY: run build test tidy clean

## go run main.go
run:
	go run $(MAIN)

## Build binary: ./bin/$(APP_NAME)
build:
	mkdir -p bin
	go build -o bin/$(APP_NAME) $(MAIN)

## Run all tests
test:
	go test -v $(PKG)

## go mod tidy
tidy:
	go mod tidy

## Remove build artifacts
clean:
	rm -rf bin
