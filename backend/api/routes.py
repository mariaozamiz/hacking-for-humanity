from starlette.routing import Route

from backend.api import (
    get_challenges,
    subscribe_to_challenge,
    complete_challenge,
)
from backend.api import create_user, get_me

routes = [
    # users
    Route("/users/", create_user, methods=["POST"]),
    Route("/users/me/", get_me, methods=["GET"]),
    # challenges
    Route("/challenges/{challenge_id}", subscribe_to_challenge, methods=["POST"]),
    Route("/challenges/{challenge_id}", complete_challenge, methods=["POST"]),
    Route("/challenges/", get_challenges, methods=["GET"]),
]
