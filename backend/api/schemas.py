from dataclasses import dataclass


@dataclass
class User:
    name: str
    email: str


@dataclass
class Challenge:
    id: str
    type: str
    image: str
    name: str
    description: str
