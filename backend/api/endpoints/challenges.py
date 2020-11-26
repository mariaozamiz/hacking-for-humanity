from datetime import datetime

from starlette.exceptions import HTTPException
from starlette.requests import Request
from starlette.responses import UJSONResponse
from starlette.status import HTTP_201_CREATED

from api import UNSPECIFIED_AUTHENTICATION_HEADER_MESSAGE
from api.resources import challenges, users, challenge_subscribers, challenge_completers

VIEW_NAME = "Grid view"


async def get_challenges(request: Request) -> UJSONResponse:
    response = challenges.get_all(view=VIEW_NAME)
    return UJSONResponse(response)


async def subscribe_to_challenge(request: Request) -> UJSONResponse:
    try:
        token = request.headers["Authorization"]
    except KeyError:
        raise HTTPException(
            status_code=401, detail=UNSPECIFIED_AUTHENTICATION_HEADER_MESSAGE
        )
    challenge_id = request.path_params["challenge_id"]
    user = users.search("token", token, max_records=1)

    subscription_data = {"user_id": user["id"], "challenge_id": challenge_id}
    challenge_subscribers.insert(subscription_data)
    return UJSONResponse(subscription_data, status_code=HTTP_201_CREATED)


async def complete_challenge(request: Request) -> UJSONResponse:
    try:
        token = request.headers["Authorization"]
    except KeyError:
        raise HTTPException(
            status_code=401, detail=UNSPECIFIED_AUTHENTICATION_HEADER_MESSAGE
        )
    challenge_id = request.path_params["challenge_id"]
    user = users.search("token", token, max_records=1)

    completion_data = {
        "user_id": user["id"],
        "challenge_id": challenge_id,
        "completed_at": datetime.now(),
    }
    challenge_completers.insert(completion_data)
    return UJSONResponse(completion_data, status_code=HTTP_201_CREATED)
