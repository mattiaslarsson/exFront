/**
 * Created by Mattias on 2017-02-27.
 */
import React, {Component} from 'react';
import Request from 'superagent';

export default class Fileuploader extends Component {

    constructor(props) {
        super(props);
        this.state = ({file: {}, imageUrl: {}});
    }

    onFileChange(event) {
        var reader = new FileReader();
        this.setState({file: event.target.files[0]});
        reader.onloadend = () => {
            this.setState({imageUrl: reader.result});
        };

        reader.readAsDataURL(event.target.files[0]);
    }

    onSubmit() {
        Request
            .post(this.props.postUrl)
            .attach('file', this.state.file)
            .end((err, res) => {
                if(err || !res.ok) {
                    this.props.onFinished(null, res);
                } else {
                    this.props.onFinished(this.state.file, res);
                }
            });
    }


    render() {
        let previewImage = null;
        if(this.props.preview) {
            previewImage = <img src={this.state.imageUrl} width="100" alt="Preview" />
        }
        return (
            <div>
                <input type="file" onChange={(event) => this.onFileChange(event)} />
                <button type="button" onClick={() => this.onSubmit()}>OK</button>
                {previewImage}
            </div>

        )
    }
}

Fileuploader.propTypes = {
    postUrl: React.PropTypes.string.isRequired,
    onFinished: React.PropTypes.func.isRequired,
    preview: React.PropTypes.bool
};