import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Alert, Button, CloseButton, Col, Container, Form, Image, Row, Table } from 'react-bootstrap';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { ImCross } from 'react-icons/im'
import { useSelector } from 'react-redux';
const onHover = {
    cursor: "pointer",
    position: "absolute",
    left: "10px",
    top: "-10px"
}
const AdminEditProductPageComponent = ({ categories, fetchProducts, updateProductApiRequest }) => {
    const [validated, setValidated] = useState(false);
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const [updateProductResponseState, setUpdateProductResponseState] = useState({ message: "", error: "" })
    const [attributeFromDb, setAttributeFromDb] = useState([])/* for categories */
    const [attributesTable, setAttributesTable] = useState([]) /* for html tables */
    const navigate = useNavigate();
    const attrVal = useRef(null)
    const attrKey = useRef(null)
    const [newAttrKey, setNewAttrKey] = useState(false)
    const [newAttrValue, setNewAttrValue] = useState(false)
    const createNewAttrKey = useRef(null)
    const createNewAttrValue = useRef(null)
    const [categoryChoosen, setCategoryChoosen] = useState("Choose category")
    useEffect(() => {
        fetchProducts(id).then((data) => {
            setProduct(data)
        })
    }, [fetchProducts, id])

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget.elements;
        const formInputs = {
            name: form.name.value,
            description: form.description.value,
            count: form.count.value,
            price: form.price.value,
            category: form.category.value,
            attributesTable: attributesTable
        }
        if (event.currentTarget.checkValidity() === true) {
            updateProductApiRequest(id, formInputs).then((data) => {
                if (data.message === "Product updated successfully") {
                    navigate("/admin/products")
                }
            }).catch((err) => {
                setUpdateProductResponseState({
                    error: err?.response?.data?.message ? err.response.data.message : err.response.data
                })
            })
        }

        setValidated(true);
    };
    const changeCategory = (e) => {
        const highLevelCategory = e.target.value.split("/")[0]
        const highLevelCategoryAllData = categories.find((cat) => cat.name === highLevelCategory);

        if (highLevelCategoryAllData && highLevelCategoryAllData.attrs) {
            setAttributeFromDb(highLevelCategoryAllData.attrs)
        } else {
            setAttributeFromDb([])
        }
        setCategoryChoosen(e.target.value)

    }
    const setValuesForAttrFromDbSelectForm = (e) => {
        if (e.target.value !== "Choose attribute") {
            var selectedAttr = attributeFromDb.find((item) => item.key === e.target.value)
            let valuesForAttrKeys = attrVal.current;
            if (selectedAttr && selectedAttr.value.length > 0) {
                while (valuesForAttrKeys.options.length) {
                    valuesForAttrKeys.remove(0)
                }
                valuesForAttrKeys.options.add(new Option("Choose attribute value"))
                selectedAttr.value.map((item) => {
                    valuesForAttrKeys.add(new Option(item))
                    return ""
                })
            }

        }
    }
    useEffect(() => {
        let categoryOfEditedProduct = categories.find((item) => item.name === product.category)
        if (categoryOfEditedProduct) {
            const mainCategoryOfEditedProduct = categoryOfEditedProduct.name.split("/")[0];
            const mainCategoryOfEditedProductAllData = categories.find((product) => product.name === mainCategoryOfEditedProduct);
            if (mainCategoryOfEditedProductAllData && mainCategoryOfEditedProductAllData.attrs.length > 0) {
                setAttributeFromDb(mainCategoryOfEditedProductAllData.attrs)
            }

        }
        setCategoryChoosen(product.category)
        setAttributesTable(product.attrs)
    }, [product])

    const attributeValueSelected = (e) => {
        if (e.target.value !== "Choose attribute value") {
            setAttributeTableWrapper(attrKey.current.value, e.target.value)
        }
    }

    const setAttributeTableWrapper = (key, val) => {
        setAttributesTable((attr) => {
            if (attr.length !== 0) {
                var keyExistsInOldTable = false;
                let modifiedTable = attr.map((item, idx) => {
                    if (item?.key === key) {
                        keyExistsInOldTable = true
                        item.value = val;
                        return item;
                    } else {
                        return item
                    }
                })
                if (keyExistsInOldTable) return [{ ...modifiedTable }]
                else return [...modifiedTable, { key: key, value: val }]
            } else {
                return [{ key: key, value: val }]
            }
        })
    }

    const deleteAttribute = (key) => {
        setAttributesTable((table) => table.filter((item) => item.key !== key))


    }
    const checkKeyDown = (e) => {
        if (e.code === "Enter") {
            e.preventDefault()
        }
    }
    const newAttrKeyHandler = (e) => {
        e.preventDefault()
        setNewAttrKey(e.target.value)
        addNewAttributeManually(e)
    }
    const newAttrValueHandler = (e) => {
        e.preventDefault()
        setNewAttrValue(e.target.value)
        addNewAttributeManually(e)
    }
    const addNewAttributeManually = (e) => {
        if (e.keyCode && e.keyCode === 13) {
            if (newAttrKey && newAttrValue) {
                setAttributeTableWrapper(newAttrKey, newAttrValue)
                e.target.value = ""
                createNewAttrKey.current.value = ""
                createNewAttrValue.current.value = ""
                setNewAttrKey(false)
                setNewAttrValue(false)

            }
        }

    }
    return (
        <Container style={{ marginBottom: "140px" }}>
            <Row className='mt-5 justify-content-md-center'>
                <Col md={1}>
                    <Link className='btn btn-info my-3 text-white' to={"/admin/products"}> Go back</Link>
                </Col>
                <Col md={6}>
                    <h1>Edit product</h1>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} onKeyDown={(e) => checkKeyDown(e)} >
                        <Form.Group className='mb-3' controlId="formBasicProductName">
                            <Form.Label> Product Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name='name'
                                defaultValue={product?.name}
                            />

                        </Form.Group>
                        <Form.Group className='mb-3' controlId="formBasicDescription">
                            <Form.Label>Description </Form.Label>
                            <Form.Control
                                required
                                type="text"
                                as={"textarea"}
                                name='description'
                                defaultValue={product?.description}
                            />

                        </Form.Group>
                        <Form.Group className='mb-3' controlId="formBasicStock">
                            <Form.Label>Count In stock</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                name='count'
                                defaultValue={product?.count}
                            />

                        </Form.Group>
                        <Form.Group className='mb-3' controlId="formBasicPrice">
                            <Form.Label> Price</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                name='price'
                                defaultValue={product?.price}
                            />

                        </Form.Group>
                        <Form.Group className='mb-3' controlId="formBasicCategory">
                            <Form.Label> Category <CloseButton />(<small>Remove</small>)</Form.Label>
                            <Form.Select
                                required
                                type="number"
                                name='category'
                                aria-label='defalut select example'
                                onChange={changeCategory}

                            ><option value={"Choose category"}>Choose category</option>
                                {
                                    categories?.map((category, idx) => {
                                        return product.category === category.name ? (<option selected value={category?.name} key={idx}>
                                            {category.name}
                                        </option>) : (<option value={category?.name} key={idx}>
                                            {category.name}
                                        </option>)
                                    })
                                }
                            </Form.Select>

                        </Form.Group>
                        {
                            attributeFromDb.length > 0 && (
                                <Row className='mt-5'>
                                    <Col md={6}>
                                        <Form.Group className='mb-3' controlId="formBasicAttribute">
                                            <Form.Label> Choose attribute and set value</Form.Label>
                                            <Form.Select
                                                required
                                                type="number"
                                                name='atrrkey'
                                                aria-label='defalut select example'
                                                ref={attrKey}
                                                onChange={setValuesForAttrFromDbSelectForm}
                                            ><option value={""}>Choose attribute</option>
                                                {
                                                    attributeFromDb.map((item, idx) => <Fragment key={idx}>
                                                        <option value={item.key}>{item.key}</option>

                                                    </Fragment>)
                                                }
                                            </Form.Select>

                                        </Form.Group>

                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className='mb-3' controlId="formBasicAttribute">
                                            <Form.Label> Attribute value</Form.Label>
                                            <Form.Select
                                                required
                                                type="number"
                                                name='atrrkey'
                                                aria-label='defalut select example'
                                                ref={attrVal}
                                                onChange={attributeValueSelected}
                                            ><option value={""}>Choose attribute value</option>
                                                <option value={"1"}>1</option>
                                                <option value={"2"}>2</option>
                                                <option value={"3"}>3</option></Form.Select>

                                        </Form.Group>
                                    </Col>
                                </Row>
                            )
                        }
                        <Row>{
                            attributesTable && attributesTable.length > 0 && (<Table hover>
                                <thead>
                                    <tr>
                                        <th>Attribute</th>
                                        <th>value</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>{
                                    attributesTable.map((item, idx) => (
                                        <tr key={idx}>
                                            <td>{item?.key}</td>
                                            <td>{item?.value}</td>
                                            <td><CloseButton onClick={() => deleteAttribute(item.key)} /></td>
                                        </tr>
                                    ))}

                                </tbody>
                            </Table>)}

                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group className='mb-3' controlId="formBasicNewAttribute">
                                    <Form.Label> Create new attribute</Form.Label>
                                    <Form.Control
                                        required={newAttrKey}
                                        type="text"
                                        name='newAttrKey'
                                        disabled={categoryChoosen === "Choose category"}
                                        placeholder="first choose or create category"
                                        onKeyUp={newAttrKeyHandler}
                                        ref={createNewAttrKey}

                                    />
                                </Form.Group>

                            </Col>
                            <Col md={6}>
                                <Form.Group className='mb-3' controlId="formBasicNewAttribute">
                                    <Form.Label> Create new attribute value</Form.Label>
                                    <Form.Control
                                        required={newAttrValue}
                                        type="text"
                                        name='newAttrValue'
                                        disabled={categoryChoosen === "Choose category"}
                                        placeholder="first choose or create category"
                                        onKeyUp={newAttrValueHandler}
                                        ref={createNewAttrValue}

                                    />

                                </Form.Group>

                            </Col>
                        </Row>
                        <Alert show={newAttrKey && newAttrValue} variant="primary">
                            After typing attribute key and value press enter on one of the field
                        </Alert>
                        <Form.Group className='mb-3' controlId="formMultipleFile">
                            <Form.Label>Images</Form.Label>
                            <Form.Control required name='multipleFile' type="file" multiple />
                            <Row className='mt-3'>
                                {
                                    product.images && product.images.map((image, idx) => (
                                        <Col key={idx} style={{ position: "relative" }} xs={3}>
                                            <Image fluid src={image?.path ?? null} />
                                            <ImCross style={onHover} className='text-danger ' />
                                        </Col>

                                    ))
                                }

                            </Row>

                        </Form.Group>

                        <Button type='submit' variant="primary">Update</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminEditProductPageComponent;