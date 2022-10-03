import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { InputGroup, Card, Col, Form, Row, Button } from "react-bootstrap";
import { IoMdArrowRoundForward } from "react-icons/io";
import axios from "axios";
import { AiOutlineSearch } from "react-icons/ai";


export default function Menu() {

    const [drinkData, setDrinksData] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [edit, setEdit] = useState(true);

    const handleSubmit = async () => {
        try {
            const response = await axios.get("https://api.github.com/users");
            const { data, status } = response;
            if (status === 200) {
                setDrinksData(data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleSubmit();
        setDrinksData();
    }, [])



    const searchItems = (searchValue) => {
        setSearchInput(searchValue);
        if (searchInput !== '') {
            const filteredData = drinkData.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else {
            setFilteredResults(drinkData)
        }
    }

    return (
        <section className="listing_menu pt-5">
            <Row>
                <Col md={8} className="mb-5 mx-auto">
                    <Form className="search_input mb-4">
                        <InputGroup className="mb-3 border-0">
                            <Form.Control
                                placeholder="Enter your Name"
                                aria-label="Username"
                                className="border-0"
                                onFocus={(e) => {
                                    setEdit(!e);
                                }}
                                onChange={(e) => searchItems(e.target.value)}
                            />
                            {
                                edit === true ?
                                    <InputGroup.Text className="btn primary-bg text-white" ><AiOutlineSearch /></InputGroup.Text>
                                    : 
                                    ""
                            }
                        </InputGroup>
                    </Form>
                    {searchInput.length > 1 ? (
                        filteredResults.map((element, key) => {
                            return (
                                <div key={key} id={1}>
                                    <Card className="border-0 box-shadow rounded my-4" key={key}>
                                        <div className="p-3 d-flex justify-content-between border-0 white-bg border-bottom">
                                            <div className="d-flex gap-3">
                                                <div>
                                                    <img src={element?.avatar_url} alt="avatar_url" width={'70px'} height={'70px'} className="rounded" />
                                                </div>
                                                <div>
                                                    <h6 className=" m-0">Name:- <span className="text-uppercase">{element?.login}</span></h6>
                                                    <h6 className="m-0"> {element?.name}</h6>
                                                    <span className="lightgray-text text-capitalize "> Public repos:- <Link to={`${element?.repos_url}`}>{element?.repos_url}</Link> <br /></span>
                                                    <small className="lightgray-text">Public gists:- <Link to={`${element?.gists_url}`} className='text-decoration-none lightgray-text'>{element?.gists_url}</Link> </small>
                                                </div>
                                            </div>
                                            <div>
                                                <Button className="box-shadow bg-light border-dark py-1 text-black" >{element?.type}</Button>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            )
                        }))
                        :
                        (drinkData?.map((element, key) => {
                            return (
                                <div key={key} id={key + 1}>
                                    <Card className="border-0 box-shadow rounded my-4" key={key}>
                                        <div className="p-3 d-flex justify-content-between border-0 white-bg border-bottom">
                                            <div className="d-flex gap-3">
                                                <div>
                                                    <img src={element?.avatar_url} alt="avatar_url" width={'70px'} height={'70px'} className="rounded" />
                                                </div>
                                                <div>
                                                    <h6 className=" m-0">Name:- <span className="text-uppercase">{element?.login}</span>  </h6>
                                                    <h6 className="m-0"> {element?.name}</h6>
                                                    <span className="lightgray-text  "> Public repos:- <Link to={`${element?.repos_url}`}>{element?.repos_url}</Link> <br /></span>
                                                    <small className="lightgray-text">Public gists:- <Link to={`${element?.gists_url}`} className='text-decoration-none lightgray-text'>{element?.gists_url}</Link> </small>
                                                </div>
                                            </div>
                                            <div>
                                                <Button className="box-shadow bg-light border-dark py-1 text-black" >{element?.type}</Button>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            )
                        }))}
                </Col>
            </Row >
        </section >
    );
}