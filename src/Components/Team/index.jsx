import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchListUsers } from '../../Redux/comments/commentsReducer'

import Container from "../Container"
import TeamCard from "../TeamCard"

import './Team.scss'

const Team = () => {
    const dispatch = useDispatch()
    const comments= useSelector((store)=> store.comments.entities)

    const team = comments.slice(0,4)

    useEffect(()=>{
        dispatch(fetchListUsers())
    },[dispatch])

    return(
        <section className="team-section">
            <Container>
                <h2 className="team-title">Meet our team</h2>
                <ul className="team-flex">
                    {team.map(({id, title, firstName, lastName, picture})=>{
                        return <TeamCard 
                            key={id}
                            title={title}
                            name={`${firstName} ${lastName}`}
                            image={picture}
                        />
                    })}
                </ul>
            </Container>
        </section>
    )
}
export default Team