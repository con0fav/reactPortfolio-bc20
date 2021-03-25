import React from 'react';
import Project from '../components/project';
import Header from '../components/jumbotron';

import TouristImg from '../images/touristsim.JPG';
import SongbirdieImg from '../images/songbirdie.png';
import BurgImg from '../images/burg.JPG';
import NotetakerImg from '../images/notetaker.JPG';
import WorkoutImg from '../images/workouttracker.JPG';
import ReadmeGenImg from '../images/readmegen.JPG';


function ProjectPage() {

    return (

        <div class="container">
            <Header text="Here's some selected projects" />
            <div class="row">
                <div class="col">
                    <Project text="Tourist Simulator" href="https://github.com/themancalledzac/Tourist-Simulator" alt="Tourist Simulator" img={TouristImg} />
                    <Project text="Songbirdie" href="https://github.com/Bryson-Palmer/song-bird" alt="Songbirdie" img={SongbirdieImg} />
                    <Project text="Da Burg" href="https://github.com/con0fav/daBurg-bc13" alt="Da Burg" img={BurgImg} />
                </div>
                <div class="col">
                    <Project text="README Generator" href="https://github.com/con0fav/readMeGen-bc09" alt="README Generator" img={ReadmeGenImg} />
                    <Project text="Note Taker" href="https://github.com/con0fav/noteTaker-bc11" alt="Note Taker" img={NotetakerImg} />
                    <Project text="Workout Tracker" href="https://github.com/con0fav/workoutTracker-bc17" alt="Workout Tracker" img={WorkoutImg} />
                </div>
            </div>
        </div>

    )

}

export default ProjectPage;