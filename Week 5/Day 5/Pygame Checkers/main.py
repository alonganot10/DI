import pygame
pygame.init()


# create a screen
screen = pygame.display.set_mode(size=(500, 500))

# title and icon
pygame.display.set_caption("Checkers")
icon = pygame.image.load('images/icon.jpg')
pygame.display.set_icon(icon)

# game loop
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    screen.fill((255, 255, 255))
    pygame.display.update()
