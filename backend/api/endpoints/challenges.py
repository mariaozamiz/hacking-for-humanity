from datetime import datetime

from starlette.exceptions import HTTPException
from starlette.requests import Request
from starlette.responses import JSONResponse
from starlette.status import HTTP_201_CREATED

from api.constants import UNSPECIFIED_AUTHORIZATION_HEADER_MESSAGE, INVALID_TOKEN_MESSAGE
from api.resources import challenges, users, challenge_subscribers, challenge_completers

VIEW_NAME = "Grid view"


async def get_challenges(request: Request) -> JSONResponse:
    response = challenges.get_all(view=VIEW_NAME)
    return JSONResponse(response)


async def subscribe_to_challenge(request: Request) -> JSONResponse:
    try:
        token = request.headers["Authorization"]
    except KeyError:
        raise HTTPException(
            status_code=401, detail=UNSPECIFIED_AUTHORIZATION_HEADER_MESSAGE
        )
    challenge_id = request.path_params["challenge_id"]
    user = users.search("token", token, max_records=1)

    if user:
        user = user[0]
        subscription_data = {"user_id": user["fields"]["id"], "challenge_id": challenge_id}
        challenge_subscribers.insert(subscription_data)
        return JSONResponse(subscription_data, status_code=HTTP_201_CREATED)

    raise HTTPException(
        status_code=403, detail=INVALID_TOKEN_MESSAGE
    )


async def complete_challenge(request: Request) -> JSONResponse:
    try:
        token = request.headers["Authorization"]
    except KeyError:
        raise HTTPException(
            status_code=401, detail=UNSPECIFIED_AUTHORIZATION_HEADER_MESSAGE
        )
    challenge_id = request.path_params["challenge_id"]
    user = users.search("token", token, max_records=1)

    if user:
        user = user[0]

        completion_data = {
            "user_id": user["fields"]["id"],
            "challenge_id": challenge_id,
            "completed_at": datetime.now(),
        }
        challenge_completers.insert(completion_data)
        return JSONResponse(completion_data, status_code=HTTP_201_CREATED)

    raise HTTPException(
        status_code=403, detail=INVALID_TOKEN_MESSAGE
    )