import React from 'react';
import Project from '../components/project';
import Header from '../components/jumbotron';

function ProjectPage() {

    return (

        <div class="container">
            <div class="row">
                <div class="col">
                    <Project text="Tourist Simulator" href="https://github.com/themancalledzac/Tourist-Simulator" alt="Tourist Simulator" />
                    <Project text="Songbirdie" href="https://github.com/Bryson-Palmer/song-bird" alt="Songbirdie"/>
                    <Project text="Da Burg" href="https://github.com/con0fav/daBurg-bc13" alt="Da Burg"/>
                </div>
                <div class="col">
                    <Project text="README Generator" href="https://github.com/con0fav/readMeGen-bc09" alt="README Generator"/>
                    <Project text="Note Taker" href="https://github.com/con0fav/noteTaker-bc11" alt="TNote Taker"/>
                    <Project text="Workout Tracker" href="https://github.com/con0fav/workoutTracker-bc17" alt="Workout Tracker"/>
                </div>
            </div>
            <Header />
        </div>

    )

}

export default ProjectPage;