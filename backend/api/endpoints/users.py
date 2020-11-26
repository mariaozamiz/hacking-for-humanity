from dataclasses import asdict
from json import JSONDecodeError
from uuid import uuid4

from starlette.exceptions import HTTPException
from starlette.requests import Request
from starlette.responses import UJSONResponse
from starlette.status import HTTP_201_CREATED

from api import MALFORMED_JSON_MESSAGE, UNSPECIFIED_AUTHENTICATION_HEADER_MESSAGE
from api.resources import users
from api.schemas import User


async def create_user(request: Request) -> UJSONResponse:
    try:
        payload = await request.json()
        user_data = asdict(User(**payload))
        user_data["token"] = str(uuid4())
        users.insert(user_data)
    except JSONDecodeError:
        raise HTTPException(status_code=400, detail=MALFORMED_JSON_MESSAGE)

    return UJSONResponse(user_data, status_code=HTTP_201_CREATED)


async def get_me(request: Request) -> UJSONResponse:
    try:
        token = request.headers["Authorization"]
    except KeyError:
        raise HTTPException(
            status_code=401, detail=UNSPECIFIED_AUTHENTICATION_HEADER_MESSAGE
        )

    response = users.search("token", token, max_records=1)
    return UJSONResponse(response, status_code=HTTP_201_CREATED)
