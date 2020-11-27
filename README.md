# Decision Maker

![Continuous Delivery](https://github.com/jaypeng2015/decision-maker/workflows/Continuous%20Delivery/badge.svg?branch=master)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Http triggered AWS Step Functions for decision making, which can be integrated with slack commands.

# How this works

## Create Emojis

- Go to your slack team, and choose `Customize Your Team` -> `Emoji`.
- Create the following emojis for dices. Related gifs can be found [here](http://www.xiazaizhijia.com/rjjc/100199.html).
  - dice_1
  - dice_2
  - dice_3
  - dice_4
  - dice_5
  - dice_6
- Create the following emojis for coins, apparently for two sides of coins.
  - coin_1
  - coin_2

## Configure your AWS credentials

- Install the [AWS CLI](http://docs.aws.amazon.com/cli/latest/userguide/installing.html) for your operating system.
- Configure your AWS security access keys

  ```
    aws --profile decisionmaker configure
    AWS Access Key ID [None]: xxxxxxxxxxxxxxxx
    AWS Secret Access Key [None]: xxxxxxxxxxxxxxxxxxxx
    Default region name [None]: ap-southeast-2
    Default output format [None]: json
  ```

- Activate the decision-maker profile

  ```
    export AWS_PROFILE=decision-maker
  ```

## Deploy serverless stack

- Deploy the project by running the following commands:

  ```
  git clone https://github.com/jaypeng2015/decision-maker
  cd decision-maker
  npm i
  npm run deploy
  ```

- Remember the endpoint shows in the result.

## Configure slack slash command

- Go to your slack team, `Custom Integrations` -> `Slash Command` and then create a new command.
- Choose a command name, normally `/roll`
- Enter the API gateway endpoint as `URL`
- Customize other fields as you want

## Try you commands

- /roll (same as /roll dice)
- /roll coin
- /roll 100 (or any numbers)
