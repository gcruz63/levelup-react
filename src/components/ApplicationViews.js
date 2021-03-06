import React from "react"
import { Route } from "react-router-dom"
import { GameList } from "./games/GameList.js"
import { EventList } from "./events/EventList.js"
import { GameForm } from "./games/GameForm.js"
import { EventForm } from "./events/EventForm.js"
import { UpdateGame } from "./games/UpdateGame.js"
import { UpdateEvent } from "./events/UpdateEvent.js"


export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <Route exact path="/">
                <GameList />
            </Route>

            <Route exact path="/events">
                <EventList />
            </Route>

            <Route exact path="/games/new">
                <GameForm />
            </Route>

            <Route exact path="/events/new">
                <EventForm />
            </Route>

            <Route exact path="/games/:gameId(\d+)/update">
                < UpdateGame />
            </Route>


            <Route exact path="/events/:eventId(\d+)/update">
                < UpdateEvent />
            </Route>
        </main>
    </>
}
