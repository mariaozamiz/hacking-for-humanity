from starlette.routing import Route

from api.endpoints.challenges import subscribe_to_challenge, complete_challenge, get_challenges
from api.endpoints.users import create_user, get_me

routes = [
    # users
    Route("/users/", create_user, methods=["POST"]),
    Route("/users/me/", get_me, methods=["GET"]),
    # pages
    Route("/challenges/{challenge_id}", subscribe_to_challenge, methods=["POST"]),
    Route("/challenges/{challenge_id}", complete_challenge, methods=["POST"]),
    Route("/challenges/", get_challenges, methods=["GET"]),
]
