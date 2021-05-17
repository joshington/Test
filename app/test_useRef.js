import React, {useRef, useEffect} from "react";

export default function (props){
	//Initialized a hook to hold the reference to the title div.

	const titleRef = useRef();

	useEffect(function() {
		setTimeout(() => {
			titleRef.current.textContent = "Updated Text"
		}, 2000); //update the content of the element after 2 seconds
	}, []);

	return (
		<div className="container">
			{/** the reference to the element happens here **/}
			<div className="title" ref={titleRef}>Original title</div>
		</div>
	)
}

//the update to a useRef variable, the new value can be assigned to the .current of aref variable
//this should be done with caution when aref variable is referencing a DOM element which can cause
//some unexpected behaviour aside from this updating a ref variable is safe.

function User(){
	const name = useRef("Aleem");

	useEffect(() => {
		setTimeout(() => {
			name.current = "Isiaka";
			console.log(name);
		}, 5000);
	});
	return <div>{name.current}</div>
}

//aunique way to implement a useRef hook is to use it to store values instead of DOM references
//these values can either be astate that does not need to change too often or astate that should
//change as frequently as possible but should not trigger full re-rendering of the component

//bringing the card example,instead of storing values as astate, or a variable a ref is used 
//instead

function Card(props){
	let toggled = useRef(false);

	const handleToggleBody = () => {
		toggled.current = !toggled.current;
	}
	return (
		<section className="card">
			<h3 className="card__title" onMouseMove={handleToggleBody>
				{props.title}
			</h3>

			{toggled && <article className="card__body">{props.body}</article>}
		</section>
	)
}

{/** forcing a deep re-render when an update is made to refs,the deep re-rendering mechanism
	of the useState hook can be partially implemented
**/}

function useAvatar (props){
	return <img src={props.src} />
}

function Username(props){
	return <span>{props.name}</span>
}

function User(){
	const user = useRef({
		name: "Aleem Isiaka",
		avatarURL: "https://icotar.com/avatar/jake.p"
	})

	const [, setForceUpdate] = useState(Date.now());
	useEffect(() => {
		setTimeout(() => {
			user.current = {
				name:"Isiaka Aleem",
				avatarURL:"https://icotar.com/avatar/", //a new image
			};

			setForceUpdate();

		}, 5000)
	})
	return (
		<div>
			<Username name={user.name} />
			<UserAvatar src={user.avatarURL} />
		</div>
	)
}

{/** 
	now getting from the docs
	//common use case is to access a child imperatively 
**/}

function TextInputWithFocusButton(){
	const inputE1 = useRef(null);
	const onButtonClick = () => {
		//`current` points to the mounted text input element
		inputE1.current.focus();
	};
	return(
		<>
			<input ref={inputE1} type="text" />
			<button onClick={onButtonClick}>Focus the input</button>
		</>
	)
}

function FancyInput(props, ref){
	const inputRef = useRef();
	useImperativeHandle(ref, () => ({
		focus: () => {
			inputRef.current.focus();
		}
	}));
	return <input ref={inputRef} ... />
}
FancyInput = forwardRef(FancyInput);


<View style={{marginTop:20}}>
					<TextInput 
						ref={(input) => textInput = input}
						onChangeText={onChangeText}
						style={{width:0,height:0}}
						value={internalVal}
						maxLength={lengthInput}
						returnKeyType="done"
						keyboardType="numeric"
						autoFocus={true}
					/>
					<View style={styles.containerInput}>
						{
							Array(lengthInput).fill().map((data,index) => (

								<View
									key={index} 
									style={[
										styles.cellView,
										{
											borderBottomColor: index === internalVal.length 
											? '#FB6C6A': '#234DB7'
										}
									]}
								>
									<Text 
										style={styles.cellText}
										onPress={() => textInput.focus()}
									>
										{
											internalVal && internalVal.length > 0 
											? internalVal[index]
											: ""
										}
									</Text>
								</View>
							))
						}
						
					</View>
				</View>



					useEffect(() => {
						textInput.focus()
					},[])

						useEffect(() => {
		textInput.focus()
	},[])



const onChangeText = (val) => {
		setInternalVal(val)
		if(val.length === lengthInput){
			console.log('testing complete pin')
		}
	}