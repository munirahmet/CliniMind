const Message = ({ sender, text }) => (
    <div style={{ margin: '10px 0', textAlign: sender === 'bot' ? 'left' : 'right' }}>
        <div style={{ display: 'inline-block', padding: '10px', borderRadius: '10px', backgroundColor: sender === 'bot' ? '#e1f5fe' : '#c8e6c9', maxWidth: '80%' }}>
            {text}
        </div>
    </div>
);

export default Message;
