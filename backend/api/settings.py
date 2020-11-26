from secrets import token_urlsafe

from starlette.config import Config

# Config will be read from environment variables and/or ".env" files.
from starlette.datastructures import Secret

config = Config(".env")

DEBUG = config("DEBUG", cast=bool, default=False)
TESTING = config("TESTING", cast=bool, default=False)
HTTPS_ONLY = config("HTTPS_ONLY", cast=bool, default=False)
GZIP_COMPRESSION = config("GZIP", cast=bool, default=False)
SECRET = config("SECRET", cast=Secret, default=token_urlsafe(10))
AIRTABLE_BASE_KEY = config("AIRTABLE_BASE_KEY", cast=Secret)
AIRTABLE_API_KEY = config("AIRTABLE_API_KEY", cast=Secret)
