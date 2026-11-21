
import React from 'react'


function Teachers() {

    // Teachers Array
    const teachers = [
        {
            id: 1,
            name: "Bella Gill",
            description: "Physics Teacher",
            image: "https://t4.ftcdn.net/jpg/04/92/05/13/360_F_492051327_OLzqXeDmstcg8p5FavjiJj81y6z9WSoX.jpg"
        },
        {
            id: 2,
            name: "John Smith",
            description: "Math Teacher",
            image: "https://img.magnific.com/premium-photo/beautiful-indian-teacher_981168-2922.jpg?semt=ais_hybrid&w=740&q=80"
        },
        {
            id: 3,
            name: "Sarah Williams",
            description: "English Teacher",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQZlEDL6AezmtlEncbRintTx1yJennk1BySrcao5wk_A&s=10"
        },
        {
            id: 4,
            name: "David",
            description: "Chemistry Teacher",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCVVU-b5yMNCAb63Tf-XMHKMb0-yqq9Je8fMSUf5J3QaTfb_HE_Gq7Wk&s=10"
        },
        {
            id: 5,
            name: "David",
            description: "Chemistry Teacher",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCVVU-b5yMNCAb63Tf-XMHKMb0-yqq9Je8fMSUf5J3QaTfb_HE_Gq7Wk&s=10"
        }
    ]

    return (

        
        <section className='p-2 m-4' >

            <h2 className='text-center mb-4 fw-bold  fs-1 text-uppercase text-decoration-underline text-shadow '>Our Teachers</h2>

            <p className='text-muted text-center pb-4'>A teacher is a dedicated educator who plays a vital role in shaping the minds and futures of students. Beyond delivering lessons and explaining academic subjects, a teacher fosters curiosity, encourages critical thinking, and creates a safe, supportive environment where learners can grow. They adapt their teaching methods to meet diverse learning styles, assess student progress, and provide constructive guidance to help each individual reach their full potential. Through patience, empathy, and strong communication, teachers instill essential life skills, confidence, and values that prepare students for lifelong success.</p>
           <div className="row g-4">

    {teachers.map((teacher) => (
        <div className="col-md-3" key={teacher.id}>

            <div
                className="card p-3 border-0 beidge"
                style={{
                    height: "320px",
                    backgroundColor: "rgba(230, 221, 207, 0.61)"
                }}
            >

                <img
                    src={teacher.image}
                    className="card-img-top rounded-circle Teacher-img"
                    alt={teacher.name}
                    style={{
                        height: "200px",
                        width: "200px",
                        objectFit: "cover",
                        margin: "auto"
                    }}
                />

                <div className="card-body text-center">
                    <h5 className="card-title">
                        {teacher.name}
                    </h5>

                    <p className="card-text text-primary">
                        {teacher.description}
                    </p>
                </div>

            </div>
        </div>
    ))}

</div>
        </section>
    )
}

export default Teachers
