import React from 'react'
import NavigationOptions from './NavigationOptions'
import styles from './ProjectsSection.module.scss'

function ProjectsSection(){
    const privateProjects = 'All of the work that I have done has been either under NDA or is for private organizations. I don\'t really have a portfolio that I can show publicly.';
    // TODO: Add More things on top but probably will be a cool effect of background
    return (
        <div>
            <NavigationOptions />
            <PrivateDisclaimer value ={privateProjects} />
        </div>
        )

    function PrivateDisclaimer({value}){
        return <span className={styles.projectdisclaimer}>{value}</span>
    }
}

export default ProjectsSection